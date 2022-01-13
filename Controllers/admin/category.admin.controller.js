const categoryServices = require("../../services/admin/category.services")
const slugify = require("slugify");
exports.index = async (req, res, next) => {
    let categories = await categoryServices.readAll(['id', 'name', 'slug']);
    return res.status(200).json({categories});
}

exports.store = async (req, res, next) => {
    let { name } = req.body;
    let slug = slugify(name);
    await categoryServices.create({name, slug});
    res.status(201).json({
        success: true,
        message: "category is created successfully"
    });
}

exports.show = async (req, res, next) => {
    let { id } = req.params;
    let category = await categoryServices.read({id});
    console.log(category);
    if (!category) {
        return res.status(404).json({
            success: false,
            category: null,
            message: "can't find category with this id"
        });
    }
    res.status(200).json({
        success: true,
        category
    });
}

exports.edit = async (req, res, next) => {
    let id = req.params.id;
    let category = await categoryServices.getCategory(id);
    console.log(category)
    res.render("admin/edit_category", {
        title: category.name,
        category
    })
}

exports.update = async (req, res, next) => {
    let { id } = req.params
    let newData = req.body;
    newData.slug = slugify(newData.name);
    let updatedCategory = await categoryServices.updateCategory(id, newData);
    if (!updatedCategory) {
        req.flash("inputsUpdatingValues", newData);
        return res.redirect(`/admin/categories/${id}/edit`)
    }
    req.flash("updateCategoryMessage", "category is updated successfully");
    res.redirect(`/admin/categories/${id}`);
}
