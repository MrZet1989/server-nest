import { ProductModel } from './product.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateProductDto } from './dto/create-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { ReviewModel } from '../review/review.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: ModelType<ProductModel>);
    create(dto: CreateProductDto): Promise<import("@typegoose/typegoose/lib/types").DocumentType<ProductModel>>;
    findById(id: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<ProductModel> | null>;
    deletedById(id: string): Promise<import("@typegoose/typegoose/lib/types").DocumentType<ProductModel> | null>;
    updateBuId(id: string, dto: CreateProductDto): Promise<import("@typegoose/typegoose/lib/types").DocumentType<ProductModel> | null>;
    findWithReviews(dto: FindProductDto): Promise<(ProductModel & {
        review: ReviewModel[];
        reviewCount: number;
        reviewAvg: number;
    })[]>;
}
