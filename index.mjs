import express from 'express'
import path from 'path'
import geckos from '@geckos.io/server'

const __dirname = path.resolve()

const io = geckos()
io.listen()
