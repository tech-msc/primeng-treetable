export class PacoteNodeModel{

    pacoteProcedimentoID: string;
    pacoteProcedimentoItemAgrupadorID: string;
    pacoteProcedimentoItemAgrupadorNome: string;

    listaItensPacote: Array<any> = [];
    listaUnidadesExecutantes: Array<any>= [];


    existeNaListaDeItens(itemPacoteProcedID): boolean
    {
        const itemExiste = this.listaItensPacote.find(itemID => itemPacoteProcedID == itemID);
        if (itemExiste) { return true; } else { return false; }
    }

    addItemPacote( itemPacote : any ) 
    {
        this.listaItensPacote.push(itemPacote);
    }

    existeUnidadeExecutante(unidadeExecutanteID): boolean
    {
        const unidadeExiste = this.listaUnidadesExecutantes.find(itemID => unidadeExecutanteID == itemID);
        if (unidadeExiste) { return true; } else { return false; }
    }

    addUnidade( unidadeExecutante : any )
    {
        this.listaUnidadesExecutantes.push(unidadeExecutante);
    }


}