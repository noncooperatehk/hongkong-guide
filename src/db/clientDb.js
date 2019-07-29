const data = [
	{
		name: "養心殿",
		imageUrl: "https://static7.orstatic.com/userphoto/photo/J/F70/0301XE988DB19366AABCA6px.jpg"
	},
	{
		name: "吉野家",
		imageUrl: "https://static7.orstatic.com/userphoto/photo/J/F70/0301XE988DB19366AABCA6px.jpg"	
	}
]
export default {
	find: function(query) {
		console.log(`query is ${query}`);
		return data;
	}
}