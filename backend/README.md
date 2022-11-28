
# API Reference

### User Reference

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `first_name` | `string` | **Required**. User first name. |
| `last_name` | `string` | **Required**. User last name. |
| `position` | `string` | **Required**. Job position. |
| `email` | `string` | **Required**. Email and unique identifier. |
| `password` | `string` | **Required**. User password. |
| `admin` | `boolean` | User acces level. |

#### Endpoints

```http
  GET /api/user
```

```http
  POST /api/user
```

### Project Reference

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Project name. |
| `description` | `string` | **Required**. Project description. |
| `status` | `string` | Project current status. |
| `task_number` | `number` | Number of tasks under the project. |
| `task_complete` | `number` | Number of completed tasks under the project. |
| `total_cost` | `number` |Total cost from all completed task. |
| `start_date` | `date` | **Required**. Start date for the project. |
| `end_date` | `date` | **Required**. End date for the project. |
| `completed_date` | `date` | Date where all task are completed. |

#### Endpoints

```http
  GET /api/project
```

```http
  POST /api/project
```

```http
  PATCH /api/project/:id
```

```http
  DELETE /api/project/:id
```

### Task Reference

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Task name. |
| `description` | `string` | **Required**. Task description. |
| `created_by` | `string` | **Required**. Member who create the task. |
| `status` | `string` | Task current status. |
| `responsable` | `map` | Who is going to work on the task. |
| `pay_rate` | `number` | Hourly pay rate for current task. |
| `post_hours` | `array` | All hours posted for current task. |
| `start_date` | `date` | **Required**. Start date for the project. |
| `end_date` | `date` | **Required**. End date for the project. |
| `completed_date` | `date` | Date where all task are completed. |
| `project_id` | `string` | **Required**. The project where task belong. |

#### Endpoints

```http
  GET /api/task/:project_id
```

```http
  POST /api/task
```

```http
  POST /api/task/:id
```

```http
  POST /api/task/:id
```