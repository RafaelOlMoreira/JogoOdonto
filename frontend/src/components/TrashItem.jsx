import React from 'react'
export default function TrashItem({ item, onAnswer }) {
    // fallback por clique: exibe botões com as categorias
    return (
        <div className="w-full max-w-md bg-[#2b2b2b] p-4 rounded text-center"
            role="group">
            <img src={item.image_url || '/placeholders/exemplo.webp'}
                alt={item.name} className="mx-auto h-40 w-40 object-contain" />
            <h3 className="mt-3 font-semibold">{item.name}</h3>
            <p className="text-sm mt-2">{item.description}</p>
        </div>
    )
}
