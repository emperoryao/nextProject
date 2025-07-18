//DELETE =>/api/articles/:id

import { NextRequest, NextResponse } from 'next/server'
import db from '@/app/db'
import { message } from 'antd'
interface IParams {
  params: { id: string }
}
export async function DELETE(request: Request, { params }: IParams) {
  //API處理邏輯
  await db.update(({ posts }) => {
    const idx = posts.findIndex((post) => post.id === params.id)
    posts.splice(idx, 1)
  })
  return NextResponse.json({
    code: 0,
    message: '刪除成功',
  })
}

//PATCH =>/api/articles/:id
export async function PATCH(request: Request, { params }: IParams) {
  console.log('hit本地的PATCH')
  //API處理邏輯
  const data = await request.json()
  let idx = -1
  await db.update(({ posts }) => {
    idx = posts.findIndex((post) => post.id === params.id)
    posts[idx] = {
      ...posts[idx],
      ...data,
    }
  })
  return NextResponse.json({
    code: 0,
    message: '修改成功',
    data: db.data.posts[idx],
  })
}

//GET =>/api/articles/:id
export async function GET(request: Request, { params }: IParams) {
  //API處理邏輯
  const data = db.data.posts.find((post) => post.id === params.id)
  return NextResponse.json({
    code: 0,
    message: '查詢成功',
    data,
  })
}
