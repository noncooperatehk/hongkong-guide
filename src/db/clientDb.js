//database of all companies
const data = [
    {
        title: "養心殿",
        imageUrl: "logo.png",
        address: "somewhere2",
        shortSummary: "this is the summary2"
    },
    {
        title: "吉野家",
        imageUrl: "logo.png",
        address: "somewhere1",
        shortSummary: "this is the summary1"
    }
]
export default {
    find: function(query) {
        return data;
    }
}