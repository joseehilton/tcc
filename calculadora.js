// <![CDATA[
jQuery(document).ready(function($) {
    jQuery('form[name=calculadora_tinta]').submit(function() {
        var constante_tinta;
        var area_parede, largura_parede, altura_parede;
        var area_teto, largura_teto, comprimento_parede;
        var resultado;
        area_parede = jQuery('input[name=area_parede]').val().replace(",", ".");
        area_teto = jQuery('input[name=area_teto]').val().replace(",", ".");
        constante_tinta = jQuery('select[name=tinta]').val().replace(",", ".");
        resultado = ((parseFloat(area_parede) + parseFloat(area_teto)) / constante_tinta).toFixed(2);
        obs = 0.1 * resultado;
        console.log(obs.toFixed(2));
        jQuery('.resultado-tinta').show();
        jQuery('.resultado-tinta').html('');
        jQuery('.resultado-tinta').html('<span class="label label-danger">RESULTADO:</span> Serão necessários <b>' + resultado + '</b> litro(s).');
        jQuery('.resultado-tinta2').show();
        jQuery('.resultado-tinta2').html('<span class="label label-danger">ATENÇÃO:</span> Recomendamos que compre <b>' + obs + '</b> litro(s) à mais devido à algum imprevisto tais como: desperdício ou outro fator.');
        
        return false;
    });

    jQuery('form[name=calculadora_piso]').submit(function() {
        var largura_superficie, comprimento_superficie, area_superficie;
        var largura_revestimento, comprimento_revestimento, area_revestimento;
        var resultado;
        area_superficie = jQuery('input[name=area_superficie]').val().replace(",", ".");
        largura_revestimento = jQuery('input[name=largura_revestimento]').val().replace(",", ".");
        comprimento_revestimento = jQuery('input[name=comprimento_revestimento]').val().replace(",", ".");
        area_revestimento = (largura_revestimento / 100) * (comprimento_revestimento / 100);
        resultado = (parseFloat(area_superficie) / parseFloat(area_revestimento));
        resultado = (parseFloat(resultado) + (parseFloat(resultado) * 0.1)).toFixed(2);
        obs = 0.1 * resultado;
        console.log(obs.toFixed(2));
        jQuery('.resultado-piso').show();
        jQuery('.resultado-piso').html('');
        jQuery('.resultado-piso').html('<span class="label label-danger">RESULTADO:</span> Serão necessários <b>' + resultado + '</b> peça(s).');
        jQuery('.resultado-piso2').show();
        jQuery('.resultado-piso2').html('<span class="label label-danger">ATENÇÃO:</span> Recomendamos que compre <b>' + obs + '</b> peça(s) à mais devido à algum imprevisto tais como: desperdício, quebra ou outro fator.');
        return false;
    });

    jQuery('form[name=calculadora_telhas]').submit(function() {
        var area_cobertura;
        var constante_telha;
        var resultado;
        area_cobertura = jQuery('input[name=area_cobertura]').val().replace(",", ".");
        constante_telha = jQuery('select[name=tipo_telha]').val().replace(",", ".");
        resultado = parseFloat(area_cobertura) * parseFloat(constante_telha);
        obs = 0.1 * resultado;
        console.log(obs.toFixed(2));
        jQuery('.resultado-telha').show();
        jQuery('.resultado-telha').html('');
        jQuery('.resultado-telha').html('<span class="label label-danger">RESULTADO:</span> Serão necessárias <b>' + resultado + '</b> telha(s).');
        jQuery('.resultado-telha2').show();
        jQuery('.resultado-telha2').html('<span class="label label-danger">ATENÇÃO:</span> Recomendamos que compre <b>' + obs + '</b> telha(s) à mais devido à algum imprevisto tais como: desperdício, quebra ou outro fator.');
        return false;
    });

    jQuery('form[name=calculadora_tijolos]').submit(function() {
        var largura_superficie, comprimento_superficie, area_superficie;
        var tipo_tijolos;
        var resultado;
        area_superficie = jQuery('input[name=area_superficie_tj]').val().replace(",", ".");
        tipo_tijolos = jQuery('select[name=tipo_tijolos]').val().replace(",", ".");
        resultado = area_superficie * tipo_tijolos;
        obs = 0.1 * resultado;
        console.log(obs.toFixed(2));
        jQuery('.resultado-tijolo').show();
        jQuery('.resultado-tijolo').html('');
        jQuery('.resultado-tijolo').html('<span class="label label-danger">RESULTADO:</span> Serão necessários <b>' + resultado + '</b> tijolo(s).');
        jQuery('.resultado-tijolo2').show();
        jQuery('.resultado-tijolo2').html('<span class="label label-danger">ATENÇÃO:</span> Recomendamos que compre <b>' + obs + '</b> tijolo(s) à mais devido à algum imprevisto tais como: desperdício, quebra ou outro fator.');
        return false;
    });

    
});
// ]]>
