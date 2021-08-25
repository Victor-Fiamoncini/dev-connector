import { PostDataModel } from '@data/data-models'

export interface FindPostByIdRepository {
	findPostById(id: string): Promise<PostDataModel | null>
}
