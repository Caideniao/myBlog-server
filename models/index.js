const article = require('./lib/sequelize').article

const getArticleList = async (page = 1) => {
  try {
    let res = await article.findAll({
        limit: 10,
        offset: page - 1,
        attributes: ['author', 'introduction', 'title']
    })
    let result = []
    for (const item of res) {
        result.push(item.dataValues)
    }
    console.log(result)
    return result
  } catch (error) {
    throw error  
  }
}

const addArticle = async (title, author, introduction) => {
    try {
        let res = article.create({
            title,
            author,
            introduction,
            create_at: Date.now()
        })
        console.log(res)
        return res
    } catch (error) {
        throw error
    }
}

const getArticle = async (id) => {
    try {
        let res = article.findOne({
            where: {
                article_id: id
            }
        })
        console.log(res)
        return res
    } catch (error) {
        throw error
    }
}

module.exports = {
    getArticleList,
    addArticle,
    getArticle
}