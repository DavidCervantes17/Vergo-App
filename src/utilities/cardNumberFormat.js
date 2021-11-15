export default function(cardNumber){
    return (cardNumber.substring(0,4)
    + " " + cardNumber.substring(4, 8)
    + " " +cardNumber.substring(9, 12)
    + " " +cardNumber.substring(13, 16))
}