import ServicoDePagamentoBancario from '../src/ServicoDePagamentoBancario.js';
import assert from 'node:assert';

describe('Testes para gestão de pagamentos bancários', function () {
    let servicoDePagamentoBancario;

    // Roda antes de CADA "it", garantindo um ambiente limpo ou redefinindo o estado
    beforeEach(function () {
        servicoDePagamentoBancario = new ServicoDePagamentoBancario();
    });

    it('Validação do método realizar pagamento com valor menor que R$ 100,00 reais', function () {
        // Act (Agir)
        const resultado = servicoDePagamentoBancario.pagar('0987-7656-3475', 'Minsait', 86.99, 'padrão');
        
        // Assert (Validar ou verificar)
        assert.equal(resultado, 'Pagamento realizado com sucesso.');
    });

    it('Validação do método realizar pagamento com valor maior que R$ 100,00 reais', function () {
        // Act (Agir)
        const resultado = servicoDePagamentoBancario.pagar('0988-7656-3475', 'Minsait', 100.01, 'cara');
        
        // Assert (Validar ou verificar)
        assert.equal(resultado, 'Pagamento realizado com sucesso.');
    });

    it('Validação do método consultar último pagamento quando não houver nenhum pagamento feito', function () {
        // Act & Assert (Agir e validar ou verificar)
        const ultimoPagamento = servicoDePagamentoBancario.consultarUltimoPagamento();
        assert.equal(ultimoPagamento, 'Nenhum pagamento efetuado.');
    });

    it('Validação do método consultar último pagamento quando houver algum pagamento feito', function () {
        // Arrange (Preparar)
        servicoDePagamentoBancario.pagar('0987-7656-3475', 'Minsait', 86.99, 'padrão');
        
        // Act (Agir)
        const ultimoPagamento = servicoDePagamentoBancario.consultarUltimoPagamento();
        
        // Assert (Agora validando ou verificando que o último pagamento deve retornar)
        assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Minsait');
        assert.equal(ultimoPagamento.valor, 86.99);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });
});