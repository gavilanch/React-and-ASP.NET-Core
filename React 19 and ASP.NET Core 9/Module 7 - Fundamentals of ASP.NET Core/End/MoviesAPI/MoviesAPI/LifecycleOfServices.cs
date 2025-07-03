namespace MoviesAPI
{
    public class TransientService
    {
        private readonly Guid _id;
        public TransientService()
        {
            _id = Guid.NewGuid();
        }

        public Guid GetId() => _id;
    }

    public class ScopedService
    {
        private readonly Guid _id;
        public ScopedService()
        {
            _id = Guid.NewGuid();
        }

        public Guid GetId() => _id;
    }

    public class SingletonService
    {
        private readonly Guid _id;
        public SingletonService()
        {
            _id = Guid.NewGuid();
        }

        public Guid GetId() => _id;
    }
}
