//database of all companies
const data = [
    {
        title: "養心殿",
        imageUrl: "logo.png",
        address: "養心殿地址",
        shortSummary: "關於養心殿概括"
    },
    {
        title: "吉野家",
        imageUrl: "logo.png",
        address: "吉野家地址",
        shortSummary: "關於吉野家概括"
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