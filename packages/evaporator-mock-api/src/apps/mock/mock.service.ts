import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { MockDocument } from './mock.schema'
function sleep(time) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(true)
    },time)
  })
}
export class MockService {
  constructor(
    @Inject("MONGODB_CONNECTION_MockRepository")
    private mockModel: Model<MockDocument>,
  ) {}

  async create(params){
    return this.mockModel.insertMany([params])
  }
  async list(params){
    return this.mockModel.find(params).then(res=>{
      return{
        data:res,
        total:100
      }
    })
  }

  async update(params):Promise<any>{
    const mockId = params.mockId
    const copyParams = JSON.parse(JSON.stringify(params))
    delete copyParams.mockId
    return this.mockModel.updateOne({_id:mockId},copyParams)
  }

  async mockdata(params):Promise<any>{
    const mock = await this.mockModel.findOne({endpoint:`/${params[0]}`})

    if (mock){
      await sleep(mock.timeout)
      console.log(mock.data,'mock.data')
      try {
        return JSON.parse(mock.data)
      } catch (e) {
        return {}
      }
    } else {
      return {}
    }


  }


}
