export default function(doc){
    if(doc.isBroken){
        return '/not-found';
    }

    if(doc.type === 'portfolio'){
        return '/works';
    }

    if(doc.type === 'page'){
        return '/page/' + doc.uid;
    }

    return '/';
}
