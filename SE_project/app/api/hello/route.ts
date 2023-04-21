import connectMongo from '../../../database/conn';



export async function GET(req: Request,res:Response) {
  connectMongo();
  return new Response(JSON.stringify({hello:"World"}));
  
  //connectMongo().catch(()=>{res.status(405).json({error:"Error in the connection"})});
  
  // type of request
  /* const {method} = req;
  switch(method){
    case 'GET':
      res.status(200).json({method,name:'GET REQUEST'});
      break;
    case 'POST':
      res.status(200).json({method,name:'POST REQUEST'});
      break;
    case 'PUT':
      res.status(200).json({method,name:'PUT REQUEST'});
      break;
    case 'DELETE':
      res.status(200).json({method,name:'DELETE REQUEST'});
      break;
    
    default:
      res.setHeader('Allow',['GET','POST','PUT','DELETE']);
      res.status(405).end(`Method ${method} not allowed.`)
  }
 */
  // 
  
}
