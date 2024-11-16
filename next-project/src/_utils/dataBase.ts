import { getUser } from "@/app/api/users/route";

export async function isAnsweredJoinedProject(adress: string){
    const user = await getUser(adress);
    user.
    if(user && user.places.length > 0){
        return true;
    }
    return false;
}