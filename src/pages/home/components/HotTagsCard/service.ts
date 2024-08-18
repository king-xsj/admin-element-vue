import request from "@/utils/request";
import { IQueryParams } from "./data.d";

export async function queryList(params?: IQueryParams): Promise<any> {
	return request({
		url: "/home/tags",
		method: "get",
		params,
	});
}
