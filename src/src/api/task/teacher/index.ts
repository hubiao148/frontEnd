


import request from "@/api/api";

export function queryGroupByClassId(id:number) {
    return request({
        url: `/tasks/projects/teams/${id}`,
        method:'get',
    });
}