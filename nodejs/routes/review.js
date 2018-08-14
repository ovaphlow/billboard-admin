const express = require('express')

const sequelize = require('../util/sequelize')

const router = express.Router()

module.exports = router

// 审核不通过
router.put('/:uuid/reject', async (req, res) => {
  let sql = `
    update company set licence_review = -1 where uuid = :uuid
  `
  await sequelize.query(sql, {
    type: sequelize.QueryTypes.UPDATE,
    replacements: req.params
  }).catch(err => {
    console.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
  res.json({ content: '', message: '' })
})

// 审核通过
router.put('/:uuid/accept', async (req, res) => {
  let sql = `
    update company set licence_review = 1 where uuid = :uuid
  `
  await sequelize.query(sql, {
    type: sequelize.QueryTypes.UPDATE,
    replacements: req.params
  }).catch(err => {
    console.error(err)
    res.json({ content: '', message: '服务器错误'})
  })
  res.json({ content: '', message: '' })
})

// 待审核列表
router.get('/', async (req, res) => {
  let sql = `
    select * from company where licence_review = 0 and licence_image != ''
  `
  let result = await sequelize.query(sql, {
    type: sequelize.QueryTypes.SELECT
  }).catch(err => {
    console.error(err)
    res.json({ content: '', message: '服务器错误' })
  })
  res.json({ content: result, message: '' })
})
