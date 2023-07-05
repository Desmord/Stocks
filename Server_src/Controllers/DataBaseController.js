const UserModel = require(`../Models/UserModel`);

const getUser = async (req, res) => {

    try {
        res.status(200).json(await UserModel.find());
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
}