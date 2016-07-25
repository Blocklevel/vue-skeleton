import { Component, Data, Getter, Action } from 'vue-typed'
import DummyService from '../../service/DummyService'

require('./resource.scss')

@Component({
	template: require('./resource.html')
})
export default class extends Vue
{
	@Data()
	issues: Object

	loadIssues()
	{
		DummyService.getIssues().then(response =>
		{
			this.$set('issues', response.data)
		},
		error =>
		{
			console.log(error)
		})
	}
}
