const article = require('./lib/sequelize').article

const getArticleList = async (page = 1) => {
  try {
    let res = await article.findAll({
        limit: 10,
        offset: page - 1,
        attributes: ['author', 'introduction', 'title', 'article_id', 'created_at']
    })
    let result = []
    for (const item of res) {
        result.push(item.dataValues)
    }
    return result
  } catch (error) {
    throw error  
  }
}

const addArticle = async (art) => {
    try {
        let res = await article.create({
            ...art,
            created_at: Date.now(),
            visitor_total: 0
        })
        return res
    } catch (error) {
        throw error
    }
}

const getArticle = async (id) => {
    try {
        let res = await article.findOne({
            where: {
                title: id
            }
        })
        return res.dataValues
    } catch (error) {
        throw error
    }
}

module.exports = {
    getArticleList,
    addArticle,
    getArticle
}