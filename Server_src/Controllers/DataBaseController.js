const UserModel = require(`../Models/UserModel`);

const getUser = async (req, res) => {

    try {
        res.status(200).json(await UserModel.find());
    } catch (error) {
        res.status(500).json({ error: error })
    }

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @return true if login and password correct
 */
const logIn = async (req, res) => {
    const { login, password } = req.body;

    if (!login || !password) res.status(500).json({ error: `Empty login or password.` })

    try {
        const user = await UserModel.find({ login: login });
        const userExist = user.length > 0 ? true : false;

        if (!userExist) {
            res.status(200).json(false)
            return 0
        };


        const loginCorrect = user[0].login && login.toLowerCase() === user[0].login.toLowerCase() ? true : false;
        const passwordCorrect = user[0].password && password.toLowerCase() === user[0].password.toLowerCase() ? true : false;

        if (loginCorrect && passwordCorrect) {
            res.status(200).json(true)
        } else {
            res.status(200).json(false)
        }

    } catch (error) {
        res.status(500).json({ error: error })
    }

}

const editUser = async (req, res) => {
    const {
        id,
        login,
        password,
        tips,
        transactions,
    } = req.body;

    try {

        await UserModel.updateOne({ _id: id }, {
            $set: {
                login,
                password,
                tips,
                transactions,
            }
        });

        const dep = await UserModel.findById(id);
        if (!dep) res.status(404).json({ message: 'Not found' });
        else res.status(200).json({ message: `Edit successful.` });

    } catch (error) {
        res.status(500).json({ message: error });
    }

}

module.exports = {
    getUser,
    editUser,
    logIn,
}