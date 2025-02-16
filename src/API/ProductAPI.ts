import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export default class ProductAPI {
    static async createProduct(product: any) {
        await setDoc(doc(db, "products", product.id), product)
    }
}
