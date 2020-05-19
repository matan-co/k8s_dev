# install kubernetes dashboard

- kubectl apply -f ./kube/kubernetes-dashboard.yaml
- kubectl proxy &

# create namespace

- kubectl create namespace companyname(whatever)

# install isito on your kubernets local cluster

- brew install istioctl
- istioctl manifest apply --set profile=demo

# enable istio for the cluster

- kubectl label namespace companyname istio-injection=enabled

# Run the project

- npm run dev

# access istio dashboards

- istioctl dashboard kiali
- istioctl dashboard grafana
