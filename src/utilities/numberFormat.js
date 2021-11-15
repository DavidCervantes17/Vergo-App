export default function(price){
    let dollarUSLocale = Intl.NumberFormat('en-US');
    return `$${dollarUSLocale.format(price)}`
}