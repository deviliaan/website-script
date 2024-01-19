import provider from "~/lib/porvider"
export default defineEventHandler(async (event)=>{
    
    const res = await provider.fetchAnimeInfo('bleach').then((data)=>{
        return data;
    })
    return {
        status: 200,
        response: res
    }
})