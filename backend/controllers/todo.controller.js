import Todo from '../model/Todo.js'


export const createTodo = async (req, res) => {
    try {

        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Required fields"
            });
        }

        const todo = await Todo.create({
            title,
            description,
            user: req.userId
        });

        return res.status(201).json({
            success: true,
            message: "Todo created successfully",
            todo
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Error while creating todo",
            error: error.message
        });
    }
};


export const getTodo = async (req, res) => {
    try {

        const todo = await Todo.findOne({
            _id: req.params.id,
            user: req.userId
        });

        return res.status(200).json({
            success: true,
            message: "Todos found successfully",
            todo
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Error while finding todos",
            error: error.message
        });
    }
};


export const updateTodo = async (req, res) => {
    try {

        const todo = await Todo.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.userId
            },
            req.body,
            {
                new: true
            }
        );

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
                
            });
        }

        return res.status(200).json({
            success: true,
            message: "Todo updated successfully",
            todo
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Error while updating todo",
            error: error.message
        });
    }
};


export const deleteTodo = async (req, res) => {
    try {

        const todo = await Todo.findOneAndDelete({
            _id: req.params.id,
            user: req.userId
        });

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully"
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Error while deleting todo",
            error: error.message
        });
    }
};