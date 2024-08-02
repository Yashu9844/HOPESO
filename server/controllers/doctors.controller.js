export const signup  = async (req, res, next) =>{
    try {
        res.send("hello world")
    } catch (error) {
        console.error(error)
    }
}

export const signin = async (req, res, next) =>{
    try {
        res.send("yes");
    } catch (error) {
        console.error(error)
    }
}