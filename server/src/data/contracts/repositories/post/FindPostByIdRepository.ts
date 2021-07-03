import { PostDataModel } from '@data/models'

export interface FindPostByIdRepository {
	findPostById(id: string): Promise<PostDataModel | null>
}
