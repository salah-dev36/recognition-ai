export const postRequestFetch= async (inputs, urlParam) => {
    const response = await fetch(`http://localhost:3001/${urlParam}/`,{
        method:"post",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(inputs)
    })
    const data = await response.json()

    return data
}