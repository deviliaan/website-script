import provider from "~/lib/porvider";
export default defineEventHandler(async(event)=>{
    const {id} = event.context.params;
    const res = await provider.fetchAnimeInfo(id).then((data)=>{
        return data;
    })
    
    return {
        status: 200,
        response: res
    }
})