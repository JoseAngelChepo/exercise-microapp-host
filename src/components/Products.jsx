import React from "react";
import { lazy, Suspense } from 'react';
const ProductsApp = lazy(() => import('app_products/ProductsApp'));

const Products = () => {
	return (
		<>
			<h2>Products section</h2>
			<Suspense fallback={<p>Cargando products app...</p>}>
				<ProductsApp />
			</Suspense>
		</>
	)
}

export default Products;