import { TopLevelCategory, TopPageModel } from './top-page.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateTopPageDto } from './dto/create-top-page.dto';
export declare class TopPageService {
    private readonly topPageModel;
    constructor(topPageModel: ModelType<TopPageModel>);
    create(dto: CreateTopPageDto): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel>>;
    findById(id: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel> | null>;
    findByAlias(alias: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel> | null>;
    findByCategory(firstCategory: TopLevelCategory): Promise<any>;
    findByText(text: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel>[]>;
    deletedById(id: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel> | null>;
    updateById(id: string, dto: CreateTopPageDto): Promise<import("@typegoose/typegoose/lib/types").DocumentType<TopPageModel> | null>;
}
