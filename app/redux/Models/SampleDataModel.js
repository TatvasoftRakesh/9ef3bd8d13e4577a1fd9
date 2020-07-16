let APIURL = "https://hn.algolia.com/api/v1/";
let searchType = "search_by_date?tags=story&page=";

export const SampleDataModel = {
    state: {
        arrUserData: [],
        isError: '',
        setarrSampleData: [],
    },
    reducers: {
        setSampleData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                arrSampleData: payload,
                isError: false,
            };
        },
        setSampleErrorData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                arrSampleData: payload,
                isError: true,
            };
        },
        clearData(state: Object): Object {
            return {
                ...state,
                arrSampleData: setarrSampleData,
                isError: '',
            };
        }
    },
    effects: (dispatch : any) => ({
        async fetchSampleData(APIdata) {
            if (APIdata.payload) {
                dispatch.SampleDataModel.clearData();
            } else {
                let strUrl = APIURL + searchType + APIdata.pagenumber;
                await fetch(strUrl, { method: 'GET' })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        dispatch.SampleDataModel.setSampleData(responseJSON);
                    }).catch((error) => {
                        console.log('Error is: ', error);
                        dispatch.SampleDataModel.setSampleErrorData(error)
                    })
            }
        }
    })

}
