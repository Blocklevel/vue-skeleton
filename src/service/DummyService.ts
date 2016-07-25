export default class DummyService
{
	static getIssues():PromiseLike<vuejs.HttpResponse>
	{
		return Vue.http.get('https://api.github.com/repos/vuejs/vue/issues')
	}
}
