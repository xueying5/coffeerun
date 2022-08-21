export class Row{
    constructor(coffeeOrder){
        let $div = getDivElement(coffeeOrder);
        this.$element = $div;
    }
}

function getDivElement(coffeeOrder) {
    let $div = $('<div></div>', {
        'data-coffee-order': 'checkbox',
        'class': 'checkbox'
    });
    let $label = $('<label></label>');
    let $checkbox = $('<input></input>', {
        type: 'checkbox',
        value: coffeeOrder.emailAddress
    });
    let description = coffeeOrder.size + ' ';
    if (coffeeOrder.flavor) {
        description += coffeeOrder.flavor + ' ';
    }
    description += coffeeOrder.coffee + ', ';
    description += ' (' + coffeeOrder.emailAddress + ')';
    description += ' [' + coffeeOrder.strength + 'x]';
    $label.append($checkbox);
    $label.append(description);
    $div.append($label);
    return $div;
}
