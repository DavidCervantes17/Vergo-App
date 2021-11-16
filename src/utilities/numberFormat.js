
export default function(price){
    try {
        let dollarUSLocale = Intl.NumberFormat('en-US');
        return `$${dollarUSLocale.format(price)}`
    } catch (error) {
        return `$${price}`
    } 
}