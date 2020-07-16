
import { connect } from 'react-redux';
import SampleScreenComponent from '../component/UserListScreen';

const mapStateToProps = ({ SampleDataModel }) => ({
        arrSampleData : SampleDataModel.arrSampleData,
        isError: SampleDataModel.isError,
    });

const mapDispatchToProps = ({ SampleDataModel : {fetchSampleData}}) => ({
    fetchSampleData : (APIData) => fetchSampleData(APIData),
})

const SampleDataListContainer = connect(mapStateToProps,mapDispatchToProps)(SampleScreenComponent);

export default SampleDataListContainer;
