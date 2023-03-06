$(principal)

function principal() {

    let idtbody = {
        id: "cuerpotabla"
    }

    let tr02 = {
        class: "tr2"
    }
    let tr03 = {
        class: "tr3"
    }
    let tr04 = {
        class: "tr4"
    }
    let tr05 = {
        class: "tr5"
    }
    let tr06 = {
        class: "tr6"
    }
    let tr07 = {
        class: "tr7"
    }

    let h2 = $("<h2>");
    let h4 = $("<h4>");

    let table = $("<table>");
    let thead = $("<thead>");
    let tbody = $("<tbody>", idtbody);

    let tr1 = $("<tr>");
    let tr2 = $("<tr>", tr02);
    let tr3 = $("<tr>", tr03);
    let tr4 = $("<tr>", tr04);
    let tr5 = $("<tr>", tr05);
    let tr6 = $("<tr>", tr06);
    let tr7 = $("<tr>", tr07);

    $("body").append(h2, h4, table);

    $("h2").append(
        `Ventas por mes`
    )
    $("h4").append(
        `Informe semestral`
    )
    $("table").append(
        thead, tbody
    )
    $("thead").append(
        tr1
    )
    $("tbody").append(
        tr2, tr3, tr4, tr5, tr6, tr7
    )
    $("thead tr").append(
        `<td>Mes</td>
        <td>Ventas</td>`
    )
    $(".tr2").append(
        `<td>Enero</td>
        <td>10325€</td>`
    )
    $(".tr3").append(
        `<td>Febreo</td>
        <td>9188€</td>`
    )
    $(".tr4").append(
        `<td>Marzo</td>
        <td>11987€</td>`
    )
    $(".tr5").append(
        `<td>Abril</td>
        <td>7625€</td>`
    )
    $(".tr6").append(
        `<td>Mayo</td>
        <td>12967</td>`
    )
    $(".tr7").append(
        `<td>Junio</td>
        <td>11134</td>`
    )
}