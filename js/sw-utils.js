// Guardar en el cache dinamico
function actualizaCacheDinamico( dyncamicCache, req, res) {
    if (res.ok) {
        return caches.open(dyncamicCache)
            .then(cache => {
                cache.put(req,res.clone())
                return res.clone();
            })
    } else {
        return res;
    }
}