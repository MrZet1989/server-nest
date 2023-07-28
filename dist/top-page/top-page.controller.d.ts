import { FindTopPageDto } from './dto/find-top-page.dto';
import { TopPageService } from './top-page.service';
import { CreateTopPageDto } from './dto/create-top-page.dto';
export declare class TopPageController {
    private readonly topPageService;
    constructor(topPageService: TopPageService);
    create(dto: CreateTopPageDto): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    get(id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    getByAlias(alias: string): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    delete(id: string): Promise<void>;
    patch(id: string, dto: CreateTopPageDto): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>>;
    find(dto: FindTopPageDto): Promise<any>;
    textSearch(text: string): Promise<import("@typegoose/typegoose").DocumentType<import("./top-page.model").TopPageModel>[]>;
}
