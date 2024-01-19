import provider from "~/lib/porvider"
export default defineEventHandler(async ()=>{
    const res = await provider.fetchRecentEpisodes().then((data)=>{
        return data;
    })
    return {
        status: 200,
        response: res
    }
})