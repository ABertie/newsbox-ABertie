export default (async function() {
    let response = await fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LNlTIFnb0NXHyHx2WdIRXyjml6HXIlLJ")
    let data = await response.json()
    
    // console.log(data.results[0]);
    console.log(data.results[0].title);
    console.log(data.results[0].abstract);
    console.log(data.results[0].section);
    // console.log(data.results[0].subsection);

})()