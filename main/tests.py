from django.test import TestCase


# Create your tests here.
class SampleViewTests(TestCase):
    def test_get(self):
        response = self.client.get('/api/sample/')
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, [])
