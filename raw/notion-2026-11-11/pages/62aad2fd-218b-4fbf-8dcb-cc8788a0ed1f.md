<database url="{{https://app.notion.com/p/62aad2fd218b4fbf8dcbcc8788a0ed1f}}" inline="false">
The title of this Database is: My Tasks
<ancestor-path>
<parent-page url="https://app.notion.com/p/49065902dad9422593eca946850b83b1" title="Home"/>
</ancestor-path>
Here are the Database's Views:
You can use the "fetch" tool on the URL of any View to see its full configuration.
<views>
<view url="{{view://5395b874-7eff-4da9-9c62-4a1fd49d8c2d}}">
{"dataSourceUrl":"","displayProperties":["Status","Task name","Due","Source"],"icon":"/images/app-packages/task-db-icon.svg","name":"My Tasks","simpleFilters":[{"filter":{"operator":"person_contains","property":"Assignee","propertyType":"person","type":"property","value":{"type":"relative","value":"me"}},"id":"notion://tasks/my_tasks/assigned_to_me_filter"},{"filter":{"operator":"status_is","property":"Status","propertyType":"status","type":"property","value":[{"type":"is_group","value":"To-do"},{"type":"is_group","value":"In progress"}]},"id":"status"}],"sorts":[{"direction":"ascending","property":"Due"}],"type":"list"}
</view>
</views>
</database>