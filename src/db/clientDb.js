//database of all companies
const data = [
    {
        title: "養心殿",
        imageUrl: "https://i.imgur.com/sv8L4VA.jpg",
        address: "養心殿地址",
        shortSummary: "關於養心殿概括"
    },
    {
        title: "吉野家",
        imageUrl: "https://i.imgur.com/sv8L4VA.jpg",
        address: "吉野家地址",
        shortSummary: "關於吉野家概括"
    },
    {
        title: "經濟日報",
        imageUrl: "https://i.imgur.com/sv8L4VA.jpg",
        address: "In the previous examples the layout system did the calculation of the size of the child items based on the no. of items. But if you want to set size for each item, you can simply set the class, md-size-[amount], to the item that you want, e.g. md-size-30. The size are always in % and the values can be multiple of 5 and also accepts the values 33 and 66.",
        shortSummary: "關於吉野家概括"
    },
    {
        title: "HKG報",
        imageUrl: "https://i.imgur.com/sv8L4VA.jpg",
        address: "吉野家地址",
        shortSummary: "You don't even need to set the size for all elements, as the flexbox model will calculate the size for the remaining items. Cool, uh?"
    }
]
export default {
    find: function(query) {
        if (!query) {
            return data.slice(0, 10);
        } else {
            return data.filter(company => company.title.includes(query)); 
        }
    }
}