public struct Todo {
    let title: String
    let completed: Bool
    let order: Int
    
    init(title: String, completed: Bool, order: Int) {
        self.title = title
        self.completed = completed
        self.order = order
    }
}