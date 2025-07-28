import React from "react";
import { useState, useEffect } from 'react';
import loadRemote from "../utils/loadRemote";
import loadRemoteScript from "../utils/loadRemoteScript";

const REMOTE_URL = 'http://localhost:3001/remoteEntry.js';
const REMOTE_SCOPE = 'app_products';
const REMOTE_MODULE = './ProductsApp'

const Products = () => {
	const [ProductsApp, setProductApp] = useState(null);

	const loadComponent = async () => {
		try {
			await loadRemoteScript(REMOTE_URL, REMOTE_SCOPE) 
			const mod = await loadRemote(REMOTE_SCOPE, REMOTE_MODULE);
			console.log(mod)
			setProductApp(() => mod.default || mod)
		} catch (err) {
			console.log('Error al cargar el remote')
		}
	}

	useEffect(() => {
		loadComponent()
	}, [])
	return (
		<>
			<h2>Products section</h2>
			{ProductsApp
				? (
					<ProductsApp />
				) : (
					<p>Cargando products app...</p>
				)}
		</>
	)
}

export default Products;